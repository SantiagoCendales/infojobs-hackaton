
export const UserInfoCard = ({name, bornDate, email, location, phone}) => {
  return (
    <div className="bg-white rounded-xl p-5">
      <div className="grid gap-4 grid-cols-8">
        <div className="col-span-1 text-center">
          <div className="rounded-full overflow-hidden w-30 mx-auto">
            <img src="https://res.cloudinary.com/dnzesrac8/image/upload/v1685075461/hackaton/index_ygxbhn.png" alt="" />
          </div>
        </div>
        <div className="col-span-7">
          <h3 className="text-xl">{name}</h3>
          <p className="text-neutral-500">{bornDate}</p>
          <p className="text-neutral-500 mb-4">{email}</p>
          <p className="mb-4">{location}</p>
          <p className=""> {phone} <span className="text-neutral-500">(preferente)</span></p>
        </div>
      </div>
    </div>
  )
}
