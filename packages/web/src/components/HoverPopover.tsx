import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@deep-design-lab/ui";

type HoverPopoverProps = {
  children: React.ReactNode;
  content: React.ReactNode;
};

export const HoverPopover = ({ children, content }: HoverPopoverProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent>{content}</HoverCardContent>
    </HoverCard>
  );
};
