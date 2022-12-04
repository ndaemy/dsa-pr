type UaEventOptions = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  transport?: "beacon" | "xhr" | "image";
};

type EventFn = (optionsOrName: UaEventOptions, params?: any) => void;

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event: EventFn = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
