"use client"
import FileItem from "@/app/components/FileItem";
import FolderItem from "@/app/components/FolderItem";

const Folders = ({ files }) => {
	
	if (files.type === 'folder') {
		return (
				<div className="folder" >
					<FolderItem files={files}/>
				</div>
		)
	}
	
	return <FileItem files={files}/>
}

export default Folders;