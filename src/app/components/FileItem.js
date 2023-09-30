import FileIcon from "./FileIcon";

const FileItem = ({files})=> {
	return <div className="flex flex-row item gap-2">
		<FileIcon type={files.type}/>
		<h3 className="file-name">{files.name}</h3>
	</div>
}
export default FileItem