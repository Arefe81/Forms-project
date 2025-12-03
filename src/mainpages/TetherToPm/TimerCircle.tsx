import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

interface TimerCircleProps {
  durationSeconds?: number;
  size?: number;
  strokeWidth?: number;
  onExpire?: () => void;
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m} : ${s}`;
}

function getRealClock() {
  const now = new Date();
  const hh = now.getHours().toString().padStart(2, "0");
  const mm = now.getMinutes().toString().padStart(2, "0");
  return `${hh} : ${mm}`;
}

export default function TimerCircle({
  durationSeconds = 10 * 60,
  size = 190,
  strokeWidth = 5,
  onExpire,
}: TimerCircleProps) {
  const [remaining, setRemaining] = useState(durationSeconds);
  const [realClock, setRealClock] = useState(getRealClock());
  const [expired, setExpired] = useState(false); // ← اضافه شد

  const intervalRef = useRef<number | null>(null);
  const startTsRef = useRef<number | null>(null);

  const radius = (size - strokeWidth) / 2 - 2;
  const cx = size / 2;
  const cy = size / 2;
  const C = 2 * Math.PI * radius;

  const green = "#40A578";
  const bg = "#2A3342";
  const thinBorder = "#3F4C64";

  // تایمر شمارش معکوس
  useEffect(() => {
    startTsRef.current = performance.now();

    intervalRef.current = window.setInterval(() => {
      if (expired) return; // ← جلوگیری از ادامه شمارش بعد از اتمام

      const elapsed = (performance.now() - (startTsRef.current ?? 0)) / 1000;
      const left = Math.max(0, Math.round(durationSeconds - elapsed));

      setRemaining(left);

      if (left <= 0) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setExpired(true); // ← تایمر تمام شد
        if (onExpire) onExpire(); // ← صدا زدن callback
      }
    }, 250);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [durationSeconds, onExpire, expired]);

  // ساعت واقعی
  useEffect(() => {
    const clockTimer = setInterval(() => {
      setRealClock(getRealClock());
    }, 1000);

    return () => clearInterval(clockTimer);
  }, []);

  const progress = (durationSeconds - remaining) / durationSeconds;
  const dash = C * (1 - progress);

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: bg,
        border: `1px solid ${thinBorder}`,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
      }}
    >
      {/* SVG Progress */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={thinBorder}
          strokeWidth={strokeWidth}
          strokeOpacity={0.2}
        />
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={green}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={dash}
          transform={`rotate(-90 ${cx} ${cy})`}
          style={{ transition: "stroke-dashoffset 250ms linear" }}
        />
      </svg>

      {/* متن داخل دایره */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          zIndex: 2,
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography sx={{ color: "#FFFFFF", fontSize: 14, fontWeight: 500 }}>
          Time For Payment
        </Typography>
        <Typography sx={{ color: green, fontSize: 38, fontWeight: 700 }}>
          {formatTime(remaining)}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
            <path
              d="M5.33036 11.5647C5.63632 11.9047 6.16948 11.9047 6.47545 11.5647M2.23862 4.41429V5.02003C2.23862 6.33706 1.85794 7.62603 1.14242 8.73173L0.75 9.33817H11.0558L10.6634 8.73179C9.94787 7.62603 9.56719 6.33706 9.56719 5.02003V4.41429C9.56719 2.39055 7.92662 0.75 5.9029 0.75C3.87917 0.75 2.23862 2.39056 2.23862 4.41429Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography sx={{ color: "#FFFFFF", fontSize: 15 }}>{realClock}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
