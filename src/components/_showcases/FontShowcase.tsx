import { interUI, interDisplay } from "@/core/utils/fonts";
import PageTextIntro from "../theme/textual/PageTextIntro";

const FontShowcase = () => {
  return (
    <div className="p-8 my-4 bg-[#1e2022]">
      <PageTextIntro
        heading="Font Showcase"
        text="This page showcases the different fonts used in the application."
      />
      <section className="mb-8 ">
        <h2 className="text-2xl mb-2">Inter UI</h2>
        <hr />
        <div className={`${interUI.variable} font-inter-ui`}>
          <p className="font-normal">Inter UI Normal 400</p>
          <p className="font-bold">Inter UI Bold 800</p>
          <p className="italic font-normal">Inter UI Italic 400</p>
          <p className="italic font-bold">Inter UI Italic Bold 800</p>
        </div>
      </section>
      <hr />1{" "}
      <section>
        <h2 className="text-2xl mb-2">Inter Display</h2>
        <hr />
        <div className={`${interDisplay.variable} font-inter-display`}>
          <p className="font-semibold">Inter Display SemiBold 600</p>
        </div>
      </section>
    </div>
  );
};

export default FontShowcase;
