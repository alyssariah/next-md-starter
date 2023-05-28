import { fetchHomeContent } from '@lib/home';
import TyperwriterComp from '@components/typewriter/TypewriterComp';
import Features from '@components/features/Features';

export default function Home() {
  const content = fetchHomeContent();

  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="w-[100%] bg-black text-white relative flex justify-center items-center">
        <div className="z-[20] flex flex-col justify-center mb-12 py-40 px-4">
          <h1 className="text-[28px] font-logo text-grey-50 text-center">Markdown CMS</h1>

          <div
            test-id="typewriter"
            className="text-center text-b[40dy-md lg:text-body-lg typewrite leading-6 my-4 text-grey-50 scrollable-div"
          >
            <TyperwriterComp strings={content.typewriter} />
          </div>
        </div>
      </div>
      <div className="w-[100%] max-w-[1440px] flex flex-col items-center justify-center px-8 py-16">
        <h2 className="text-heading-md text-grey-50 font-semibold">Features</h2>
        <Features features={content.features} />
      </div>
    </div>
  );
}
