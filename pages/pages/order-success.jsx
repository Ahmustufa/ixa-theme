// import {} from ''
const OrderSuccess = (props) => {
  return <div></div>;
};

export default OrderSuccess;

export async function getServerSideProps(context) {
  try {
    const { data } = await axios.get(uri);
    return {
      props: { productList: data.products },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
