import { useRef } from 'react'

const SingleItem = ({ item }) => {
	const ref = useRef()
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