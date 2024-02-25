import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer}
        width={773}
        height={687}
        className="object-contain w-full"/>
      </div>
      <div className='flex flex-col'>
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg object-contain">  
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text '>Embark on ashopping journey that redefines your experience with unbeatable
        deals.From premier selections to incredible savings.We offer unparalleled value that sets us a part</p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique desires,surpassing the loftiest expectations.
            Your journey with us is nothing short of exceptional.
          </p>
          <div className="mt-11 flex gap-3">
             <Button label ="Shop now"
             iconURL={arrowRight}/>
             <Button label='Learn more'/>    
          </div>
      </div>

    </section>
  )
}

export default SpecialOffers