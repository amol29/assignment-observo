import Image from "next/image";
import { useState } from "react";
import Folders from "@/app/components/Folders";

const FolderItem  = ({files})=> {
	const [isExpanded, toggleExpanded] = useState(false);
	return <>
		{isExpanded && <div className="vertical-line"/>}
		<div className="flex flex-row gap-2 cursor-pointer" onClick={() => toggleExpanded(!isExpanded)}>
			<Image
					src={isExpanded?  "/minus-square.svg": "/plus-square.svg"}
					width={15}
					height={15}
					alt="error icon"
			/>
			<Image
					src="/folder.svg"
					width={20}
					height={20}
					alt="error icon"
			/>
			<h2 className="title">{files.name}</h2>
		</div>
		{isExpanded && files.items.map((item, index) => <Folders key={index} files={item} />)}
	</>
}

export default FolderItem