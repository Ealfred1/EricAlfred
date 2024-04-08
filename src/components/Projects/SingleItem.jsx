import React from 'react'

const SingleItem = ({ item }) => {
	return (
		<section className="py-96">
			{ item.title }
		</section>
	)
}

export default SingleItem