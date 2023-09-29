"use client"
import { useState } from "react";
import Image from "next/image";
import FileIcon from './FileIcon'

const Folders = ({ files }) => {
	const [isExpanded, toggleExpanded] = useState(false);
	if (files.type === 'folder') {
		return (
				<div className="folder" >
					<>
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
				</div>
		)
	}
	
	return (
			<div className="flex flex-row item gap-2">
				<FileIcon type={files.type}/>
				<h3 className="file-name">{files.name}</h3><br />
			</div>
	)
}

export default Folders;