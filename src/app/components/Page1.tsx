import pageImage from 'figma:asset/78c72e1cfb526784c406f68ce67984b5a0a58c41.png';

export default function Page1() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <img 
        src={pageImage}
        alt="Page 1"
        className="max-w-[90vw] max-h-[90vh] object-contain"
      />
    </div>
  );
}
