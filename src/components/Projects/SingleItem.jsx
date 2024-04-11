import { useRef } from 'react'
import img from "../../assets/bg2.jpg"

const SingleItem = ({ item }) => {
	const ref = useRef()
	console.log(img)
	return (
		<section ref={ref} className="py-96">
			<div className="container">
				<img src={item.img} alt="" className="" />
				{ item.title }
			</div>
		</section>
	)
}

export default SingleItem