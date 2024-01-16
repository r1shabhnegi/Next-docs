async function fetchData() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await res.json();
  return data;
}

const Data = async () => {
  let products = await fetchData();
  console.log(products);
  return (
    <div>
      {products?.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
export default Data;
