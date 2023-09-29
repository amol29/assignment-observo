import Folders from './components/Folders'
import fsPromises from 'fs/promises';
import path from 'path'

async function getLocalData() {
    // Get the path of the json file
    const filePath = path.join(process.cwd(), '/public/files.json');

    return await fsPromises.readFile(filePath, 'utf8');
}

export default async function Home() {
    const files = await getLocalData()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="bg-white p-3 rounded-lg shadow-sm">
                <Folders files={JSON.parse(files)}/>
            </div>
        </main>
    )
}


