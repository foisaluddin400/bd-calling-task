

export const Cartitem = ({item}) => {

    const {strMealThumb,strIngredient1} = item
  return (
    <div className=" cart bg-zinc-900  m-3 rounded-lg">
        <img  className=" p-3 rounded-xl" src={strMealThumb} alt="" />
        <h2 className="text-2xl p-3 bg-black">{strIngredient1}</h2>
    </div>
  )
}
