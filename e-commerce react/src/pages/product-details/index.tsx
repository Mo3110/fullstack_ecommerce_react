import axios from "../../api/axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Text from "../../components/text"
import Button from "../../components/button"
import useGlobalStore from "../../store"


const ProductDetails = () => {

    const { id } = useParams()

    const { addItemToCart, cart } = useGlobalStore()
    console.log(`cart`, JSON.stringify(cart, null, 2))

    const [product, setProduct] = useState<IProduct>()

    const getProduct = async () => {
        try {
            const response = await axios.get(`products/${id}`)
            setProduct(response.data)
        } catch (error) {
            console.log("error in getProduct", error)
            throw error
        }
    }

    useEffect(() => {
        getProduct()
        return () => {null}
    },)


  return ( 
    <section className="mt-[82px]">
        <div className="grid grid-cols-2 mb-[180px] gap-10 mx-[50px]">
            <div className="">
                <img 
                src={product?.image} 
                className="h-[618px] object-cover" 
                alt="" />
            </div>
            <div className="">
                <Text variant="heading-one">{product?.name}</Text>
                <Text variant="subheading-two" className="my-7">
                   $ {product?.price}</Text>
                <Text variant="body-two">
                    {product?.description}</Text>
                <Button size="small" className="mt-14"
                onClick={() =>{
                    if (!product) return
                    const cartItem: RawCartItem = {
                        image: product?.image,
                        name: product?.name,
                        price: product?.price,
                        product: product?._id,
                    }
                    addItemToCart({
                        ...cartItem,
                    })
                }}>
                    Add To Bag</Button>
            </div>
        </div>
        <div className="h-[622px] mb-[180px] overflow-hidden">
            <img 
            src="https://res.cloudinary.com/dpwaeai4h/image/upload/v1684321922/e-coomerce/primaryimage_oblfj9_wniwco.png" 
            alt=""
            height={622}
            className="h-[622px] object-cover w-full" />
        </div>
    </section>
  )
}

export default ProductDetails