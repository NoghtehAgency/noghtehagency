import svgPaths from "./svg-wdvkjeyy4q";

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Kalameh:Regular',sans-serif] gap-[5px] items-start justify-center leading-[normal] left-[120px] not-italic text-[#2c3f50] text-[32px] text-nowrap top-[870px] w-[394px]">
      <p className="relative shrink-0 text-center" dir="auto">
        +98 912 639 2784
      </p>
      <p className="relative shrink-0" dir="auto">
        mahdi@noghtehagency.ir
      </p>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative size-full" data-name="Card 3">
      <div className="absolute left-[1423px] size-[80px] top-[179px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <path d={svgPaths.p28e1e480} fill="var(--fill-0, #9CE7C2)" id="Ellipse 16" />
        </svg>
      </div>
      <div className="absolute h-[226px] left-[1344px] top-[113px] w-[238px]" data-name="Ellipse 14 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 238 226">
          <path d={svgPaths.p23c10c80} fill="var(--fill-0, #2C3F50)" id="Ellipse 14 (Stroke)" />
        </svg>
      </div>
      <div className="absolute h-[10px] left-[calc(50%-507.5px)] top-[817px] translate-x-[-50%] w-[445px]" data-name="Vector 6971 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 445 10">
          <path d="M445 0V10H0V0H445Z" fill="var(--fill-0, #9CE7C2)" id="Vector 6971 (Stroke)" />
        </svg>
      </div>
      <p className="absolute font-['Kalameh:Black',sans-serif] leading-[normal] left-[calc(50%-510px)] not-italic text-[#2c3f50] text-[64px] text-center text-nowrap top-[calc(50%+33px)] translate-x-[-50%]" dir="auto">
        Mahdi Azadeh
      </p>
      <p className="absolute font-['Kalameh:Regular',sans-serif] leading-[normal] left-[calc(50%-730px)] not-italic opacity-50 text-[#2c3f50] text-[64px] text-nowrap top-[690px]" dir="auto">
        CEO
      </p>
      <Frame />
    </div>
  );
}