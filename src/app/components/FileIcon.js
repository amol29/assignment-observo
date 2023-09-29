import Image from "next/image";

const IMAGE_TYPE_VALUES = {
	"css": {
		src: '/file-type-css.svg'
	},
	"git": {
		src: '/github.svg'
	},
	"html": {
		src: '/html-5.svg'
	},
	"js": {
		src: '/file-type-js-official.svg'
	},
	"json": {
		src: '/json.svg'
	},
}

const FileIcon = ({type}) => {
	const {src, width = 15, height = 15 } = IMAGE_TYPE_VALUES[type] || {}
	return <Image
			src={src}
			width={width}
			height={height}
			alt={'image'}
	/>
}

export default FileIcon