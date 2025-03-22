import { Button, Flex, Input, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AccesoDocument = () => {

    const [file, setFile] = useState<File[]>([])

    const {
        register: frmRecordUpload,
        handleSubmit: onSumitRecordUpload,
        reset: resetRecordUpload,
        setValue: setRecordUpload,
        formState: { errors: errorRecordUpload }
    } = useForm();

    // const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.value)
    // }

    const cargarDocumento = (formData: any) => {
        const file = formData.uploadDocument[0]

        const validateExtensions = ["png", "jpeg", "jpg"]
        //pop() elimina eel ultimo elemento del array y retorna ese
        const fileExtension = file.name.split('.').pop().toLowerCase()
        if (!validateExtensions.includes(fileExtension)) {
            console.log("archivo incorrecto")
            return
        }

        setFile((prev) => [...prev, file])

    }

    const deleteImagen = (index: number) => {
        setFile((prev) => prev.filter((p, i) => i !== index))
    }

    const descargarImagen = (file: File) => {
        // Crear una URL temporal para el archivo
        const url = URL.createObjectURL(file)
        // Crear un enlace de descarga
        const link = document.createElement("a")
        link.href = url
        link.download = file.name // Nombre del archivo al descargar
        document.body.appendChild(link)
        link.click()

        // Limpiar la URL temporal
        URL.revokeObjectURL(url)
        document.body.removeChild(link)

    }

    return (
        <>
            <Flex>
                <Input type="file"
                    accept=".jpg,.jpeg,.png"
                    width={300}
                    // accept="image/*"
                    // onChange={fileUpload} 
                    {...frmRecordUpload("uploadDocument")} />
                <Button onClick={onSumitRecordUpload(cargarDocumento)}>Cargar</Button>
            </Flex>

            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Archivos cargados</TableCaption>
                    <Thead>
                        <Tr>
                            <Th isNumeric>Index</Th>
                            <Th>Nombre</Th>
                            <Th>Imagen</Th>
                            <Th>Eliminar</Th>
                            <Th>Descargar</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {file.map((f, index) => (

                            <Tr key={index}>
                                <Td isNumeric>{index}</Td>
                                <Td>{f.name}</Td>
                                <Td><img
                                    src={URL.createObjectURL(f)}
                                    alt="Preview"
                                    style={{ maxWidth: "100px" }}
                                /></Td>
                                <Td>
                                    <Button colorScheme="red" onClick={() => deleteImagen(index)}>
                                        Eliminar
                                    </Button>
                                </Td>
                                <Td>
                                    <Button colorScheme="blue" onClick={() => descargarImagen(f)}>
                                        Descargar
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th isNumeric>Index</Th>
                            <Th>Nombre</Th>
                            <Th>Imagen</Th>
                            <Th>Eliminar</Th>
                            <Th>Descargar</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>

        </>
    )
}

export default AccesoDocument