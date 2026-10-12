import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { colors } from '../styles/tokens';

const assetPathPrefix = '/assets';
const imgResume = `${assetPathPrefix}/25d68.png`;

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen w-full" style={{ backgroundColor: colors.pageBg }}>
      <Nav />
      <main className="flex flex-col items-center px-6 md:px-16 xl:px-24 py-12 w-full">
        <div className="relative rounded-[15px] w-full max-w-[1037px] overflow-hidden shadow-md" style={{ aspectRatio: '1037/1205' }}>
          <img
            alt="Stephanie Gil Vega Resume"
            className="absolute inset-0 size-full object-cover rounded-[15px]"
            src={imgResume}
          />
        </div>
      </main>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
