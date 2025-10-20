export function Book({color,title="Notebook"}: {color?: string,title?: string}) {
  return (
    <div className="p-4">
    <div className="perspective-[800px] w-[150px] aspect-[3.5/4] relative group/book">
    <div  className="relative z-20 flex flex-row shadow-lg shadow-[rgba(0,0,0,0.1)] w-[150px] aspect-[3.5/4] bg-[#f1f1f1] overflow-hidden rounded-lg  transform-gpu group-hover/book:translate-z-[30px] group-hover/book:rotate-y-[-30deg] transition-all duration-300">
    <div className="absolute z-30 rounded-lg inset-0 shadow-[0_0_0_0.85px_rgba(0,0,0,0.1)_inset,2px_0_1px_0_rgba(0,0,0,0.1)_inset,-1.5px_0_1px_0_rgba(0,0,0,0.1)_inset,0_2px_2px_0_rgba(255,255,255,0.1)_inset,0_8px_16px_0_rgba(0,0,0,0.05)]"></div>

      <div style={{backgroundColor: color}} className="w-full p-2 pl-[20px] h-[40%] bg-[rgba(0,0,0,0.1)] absolute top-0 left-0 right-0">
      </div>
<div className="w-[14px] absolute top-0 left-0 bottom-0 z-30 h-full flex flex-row justify-end">
    <div className="w-[1px] h-full bg-[rgba(255,255,255,0.25)]"></div>

  <div className="w-[1px] h-full bg-[rgba(0,0,0,0.15)]"></div>

</div>
  <p className="text-sm text-shadow-2xs text-shadow-[rgba(255,255,255,1)] 0 font-medium absolute bottom-[8px] left-[24px] right-[8px] text-[rgba(0,0,0,0.5)]">
    {title}
  </p>
    </div>
    <div className="absolute z-[4] inset-[4px] left-[16px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.2)_inset,0_2px_2px_0_rgba(255,255,255,0.1)_inset] rounded-md group-hover/book:translate-x-[6px] transition-all duration-300"></div>

    <div className="absolute z-1 shadow-[0_0_0_0.65px_rgba(0,0,0,0.1)_inset,0_2px_2px_0_rgba(255,255,255,0.1)_inset] inset-0 left-[16px] bg-[#cccccc] rounded-lg group-hover/book:translate-x-[6px] transition-all duration-300"></div>
    </div>
    </div>
  );
}
