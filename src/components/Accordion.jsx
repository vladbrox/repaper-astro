import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionComponent() {
  return (
    <div className="mt-12 w-full max-w-xl mx-auto">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl text-left font-bold">
            What is repaper?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            repaper is an AI news engine that distills updates from your favorite Telegram channels into a single, noise-free summary.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl text-left font-bold">
            How does it work?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Add your favorite channels to <a href="https://t.me/repaperbot" target="_blank" rel="noreferrer" className="text-foreground underline font-medium">@repaperbot</a>, set your preferred schedule, and it will deliver a consolidated daily brief directly to your chat.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl text-left font-bold">
            Is it free during Alpha?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Yes. During early alpha, repaper is completely free for up to 10 Telegram channels per user.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
