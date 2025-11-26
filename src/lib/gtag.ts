export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && GA_TRACKING_ID && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && GA_TRACKING_ID && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Custom events for the quiz
export const trackQuizStart = () => {
  event({
    action: "quiz_start",
    category: "quiz",
    label: "2025_new_year_goal",
  });
};

export const trackQuizComplete = (resultType: string) => {
  event({
    action: "quiz_complete",
    category: "quiz",
    label: resultType,
  });
};

export const trackShare = (method: string) => {
  event({
    action: "share",
    category: "engagement",
    label: method,
  });
};
