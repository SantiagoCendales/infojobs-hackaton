import { Button } from "../../components/ui/Button"

export const UserDetailCard = ({title, buttonLabel, buttonAction, infoArr, notFoundLabel = ''}) => {
  return (
    <div className="bg-white rounded-xl">
    <div className="flex justify-between items-center p-5">
      <h2 className="text-lg">{title}</h2>
      {/* <Button label={buttonLabel} /> */}
    </div>
    <hr />
    {
      infoArr && infoArr.length > 0
      ? (
        <div>
        {
          infoArr?.map((data) => (
            <div key={data.id} className="grid grid-cols-10 p-5 gap-4">
              <div
                className="overflow-hidden
                  rounded-lg
                  col-span-1
                  aspect-square
                  w-full"
                >
                <img
                  className="
                  object-cover
                  h-full
                  w-full"
                  src="https://components.infojobs.com/statics/images/pic-company-logo.png"
                  alt=""
                />
              </div>
              <div className="col-span-9">
                <h3>{data.empresa || data.titulo}</h3>
                <p className="text-neutral-500">{data.puesto || data.institucion}</p>
                <p className="text-neutral-500 text-sm"> {data.fecha} </p>
              </div>
            </div>
          ))
        }
      </div>
      ) 
      : (
        <p className='p-5'>{notFoundLabel}</p>
      ) 
    }

  </div>
  )
}
