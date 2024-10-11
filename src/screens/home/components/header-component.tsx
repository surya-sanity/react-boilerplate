import { memo, HTMLAttributes } from "react";
import { cn } from "app/lib/utils";
import { NavLink } from "react-router-dom";
import { ClassValue } from "clsx";
import CSS from "app/assets/images/features/css.png";
import I18N from "app/assets/images/features/i18n.png";
import InstantFeedback from "app/assets/images/features/instant-feedback.png";
import QuickScaffolding from "app/assets/images/features/quick-scaffolding.png";
import Redux from "app/assets/images/features/redux.png";
import Routing from "app/assets/images/features/routing.png";
import SEO from "app/assets/images/features/seo.png";
import StaticCodeAnalysis from "app/assets/images/features/static-code-analysis.png";
import Typescript from "app/assets/images/features/typescript.png";
import Shadcn from "app/assets/images/features/shadcn.png";

interface HeaderComponentPropsType extends HTMLAttributes<HTMLDivElement> {}

/**
 *
 * HeaderComponent
 *
 */
export const HeaderComponent: React.FunctionComponent<HeaderComponentPropsType> = memo((props: HeaderComponentPropsType) => {
  // props
  const { className, ...restProps } = props;

  // classnames
  const featureIconWrapperClassName: ClassValue =
    "flex min-h-[4rem] min-w-[4rem] w-[4rem] h-[4rem] mt-1 items-center justify-center rounded-xl overflow-clip";
  const featureSectionHeaderClassName: ClassValue = "text-xl font-semibold";
  const linkClassName: ClassValue = "text-cyan-500 hover:underline";
  const featureDescClassName: ClassValue = "text-base text-muted-foreground";
  const featureSubDescClassName: ClassValue = "text-sm text-muted-foreground";
  const featureImageClassName = "w-full h-full object-cover object-center";

  return (
    <section className={cn("mx-auto my-10 flex flex-col gap-10 px-5 lg:max-w-[72rem] lg:px-10", className)} {...restProps}>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Features</h1>
        <p className="text-base text-muted-foreground">
          Crafted for highly scalable, easily maintainable and highly performant React.js applications with a focus on best DX and best
          practices.
        </p>
      </div>

      <div className="flex flex-row items-start gap-4">
        <div className={featureIconWrapperClassName}>
          <img src={Redux} className={featureImageClassName} alt="Redux" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={featureSectionHeaderClassName}>Predictable state & Querying</h2>
          <p className={featureDescClassName}>
            Build easy to test and debug, flexible and extensible applications using{" "}
            <a href="https://redux-toolkit.js.org/" target={"_blank"} className={linkClassName}>
              Redux toolkit with RTK Query
            </a>
            . Unidirectional data flow allows for change logging and time travel debugging.{" "}
            <a href={"https://github.com/zalmoxisus/redux-devtools-extension"} target={"_blank"} className={linkClassName}>
              Install Chrome Redux Dev Tools
            </a>{" "}
            to see how your application's state changes and travel in time to debug. Type any github username below and see it in action
            with Redux Dev Tools.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-start gap-4">
        <div className={featureIconWrapperClassName}>
          <img src={Typescript} className={featureImageClassName} alt="TypeScript" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={featureSectionHeaderClassName}>TypeScript</h2>
          <p className={featureDescClassName}>
            Typescript is the key to scalability. Build self-documented code, easy-to-debug code and create maintainable large applications
            and codebases with a highly productive development experience.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-start gap-4">
        <div className={featureIconWrapperClassName}>
          <img src={Shadcn} className={featureImageClassName} alt="Shadcn" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={featureSectionHeaderClassName}>Shadcn + Radix UI</h2>
          <p className={featureDescClassName}>
            Build accessible, customizable, and flexible interfaces effortlessly using Shadcn and Radix UI. This setup combines Shadcn’s
            design flexibility with Radix UI’s unstyled, accessible primitives, allowing you to create responsive, production-ready
            components with ease. Customize every aspect of your UI while maintaining accessibility standards.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-start gap-4">
        <div className={featureIconWrapperClassName}>
          <img src={CSS} className={featureImageClassName} alt="CSS" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={featureSectionHeaderClassName}>Tailwind CSS</h2>
          <p className={featureDescClassName}>
            Design your interface with fully composable, utility-first CSS directly in your components for unmatched modularity and
            flexibility. Tailwind only includes the styles you use, ensuring optimal performance. Effortlessly build and customize
            application-wide themes, making consistent styling across your entire project a breeze. Experience the power of intuitive,
            design-driven theming by trying out the live theme switcher below!
          </p>
        </div>
      </div>

      <div className="flex flex-row items-start gap-4">
        <div className={featureIconWrapperClassName}>
          <img src={I18N} className={featureImageClassName} alt="I18N" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={featureSectionHeaderClassName}>i18n Internationalization & Pluralization</h2>
          <div className="flex flex-col gap-1">
            <p className={featureDescClassName}>
              Scalable apps need to support multiple languages, easily add and support multiple languages. Change the language below to see
              how instantly it updates the page without refreshing.
            </p>
            <p className={featureSubDescClassName}>
              (Only some of the features below are translated to demonstrate an example) Select Language
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start gap-4">
        <div className={featureIconWrapperClassName}>
          <img src={Routing} className={featureImageClassName} alt="Routing" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={featureSectionHeaderClassName}>Industry standard Routing</h2>
          <div className="flex flex-col gap-1">
            <p className={featureDescClassName}>
              It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.
            </p>
            <p className={featureSubDescClassName}>
              Go to our{" "}
              <NavLink to={"/not-found"} className={"text-cyan-500 hover:underline"}>
                /NotFound
              </NavLink>{" "}
              page to see how routing works
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start gap-4">
        <div className={featureIconWrapperClassName}>
          <img src={InstantFeedback} className={featureImageClassName} alt="InstantFeedback" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={featureSectionHeaderClassName}>Instant Feedback</h2>
          <div className="flex flex-col gap-1">
            <p className={featureDescClassName}>
              Enjoy the best DX and code your app at the speed of thought! Your saved changes to components and files are reflected
              instantaneously without refreshing the page. Thanks to{" "}
              <a href="https://vitejs.dev/" target={"_blank"} className={linkClassName}>
                Vite
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start gap-4">
        <div className={featureIconWrapperClassName}>
          <img src={QuickScaffolding} className={featureImageClassName} alt="QuickScaffolding" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={featureSectionHeaderClassName}>Quick Scaffolding</h2>
          <div className="flex flex-col gap-1">
            <p className={featureDescClassName}>
              Automate the creation of components, features, selectors and slices - right from the CLI! Avoid fighting the glue of your code
              and focus on your app!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start gap-4">
        <div className={featureIconWrapperClassName}>
          <img src={SEO} className={featureImageClassName} alt="SEO" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={featureSectionHeaderClassName}>SEO</h2>
          <div className="flex flex-col gap-1">
            <p className={featureDescClassName}>
              Supports SEO (document head tags management) for search engines that support indexing of JavaScript content.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start gap-4">
        <div className={featureIconWrapperClassName}>
          <img src={StaticCodeAnalysis} className={featureImageClassName} alt="StaticCodeAnalysis" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={featureSectionHeaderClassName}>Static Code Analysis</h2>
          <div className="flex flex-col gap-1">
            <p className={featureDescClassName}>
              Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will
              automatically be formatted and linted as you work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
