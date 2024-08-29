import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Button from "../base/Button";

const DEFAULT_HEADING = "Want product news and updates?";
const DEFAULT_SUBHEADING = "Sign up for our newsletter.";
const DEFAULT_BUTTON_TEXT = "Subscribe";
const DEFAULT_PRIVACY_POLICY_TEXT = "We care about your data. Read our";

export default function NewsletterSimpleSideBySide({
  theme,
  variables,
}: AiComponentProps) {
  return (
    <div>
      <div className="relative isolate py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div
            className={`max-w-xl text-3xl font-bold tracking-tight ${
              theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
            } sm:text-4xl lg:col-span-7`}
          >
            <h2 className="inline sm:block lg:inline xl:block">
              {variables?.["heading"] || DEFAULT_HEADING}
            </h2>{" "}
            <p className="inline sm:block lg:inline xl:block">
              {variables?.["subheading"] || DEFAULT_SUBHEADING}
            </p>
          </div>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                {variables?.["emailLabel"] || "Email address"}
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={
                  theme === "dark"
                    ? "min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                    : "min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-ai-title-regular shadow-sm ring-1 ring-inset ring-ai-subtext-regular/[.4] placeholder:text-ai-subtext-regular/[.5] focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                }
                placeholder="Enter your email"
              />
              <Button theme={theme} href="#">
                {variables?.["buttonText"] || DEFAULT_BUTTON_TEXT}
              </Button>
            </div>
            <p
              className={`mt-4 text-sm leading-6 ${
                theme === "dark"
                  ? "text-ai-subtext-dark"
                  : "text-ai-subtext-regular"
              }`}
            >
              {variables?.["privacyPolicyText"] || DEFAULT_PRIVACY_POLICY_TEXT}{" "}
              <a
                href="#"
                className={`font-semibold ${
                  theme === "dark"
                    ? "text-primary-500 hover:text-primary-400"
                    : "text-primary-600 hover:text-primary-500"
                }`}
              >
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
