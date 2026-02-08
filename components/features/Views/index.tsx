import { IconEye } from '@/components/icons';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function Views() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="bg-background/30 inline-flex items-center justify-center gap-2 rounded-full px-2 py-0.5 text-xs backdrop-blur-xl">
          <IconEye />
          <p>2,345</p>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>Views</p>
      </TooltipContent>
    </Tooltip>
  );
}
