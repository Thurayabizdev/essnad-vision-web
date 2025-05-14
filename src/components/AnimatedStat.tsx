import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface AnimatedStatProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedStat = ({ end, suffix = "", duration = 12, className = "" }: AnimatedStatProps) => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <span ref={ref} className={className}>
      <CountUp
        start={0}
        end={end}
        duration={duration}
        suffix={suffix}
        redraw={true}
        key={inView ? `inview-${end}` : `outview-${end}`}
      />
    </span>
  );
};

export default AnimatedStat; 