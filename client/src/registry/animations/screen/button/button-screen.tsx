import Button01 from './button-01';
import Button02 from './button-02';
import Button03 from './button-03';

const ButtonScreen = () => {
  return (
    <section className="mx-auto w-full rounded-[20px] border bg-[#fcfcfc] p-8 md:px-12 flex items-center gap-8 flex-wrap">
        <Button01 />
        <Button02 />
        <Button03 />
    </section>
  )
};

export default ButtonScreen;