import { X, User, Calendar } from "lucide-react"
import Button from "../../components/button"
import TextInput from "../../components/textInput"
import { FormEvent, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"
import { ThreeDots } from "react-loader-spinner"

interface CreateActivityModalProps {
    closeCreateActivityModal: () => void
}

export default function CreateActivityModal({ closeCreateActivityModal }: CreateActivityModalProps) {

    const {tripId} = useParams()
    
    const [isLoading, setIsLoading] = useState(false);

    async function createActivity (event: FormEvent<HTMLFormElement>) {

        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const activityName = data.get("activityName")?.toString()
        const occursAt = data.get("occurs_at")?.valueOf()

        setIsLoading(true);
        await api.post(`/trips/${tripId}/activities`, {
            occurs_at: occursAt, 
            title: activityName
        })
        setIsLoading(false);

        window.document.location.reload()
    }

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
                        <button type='button' onClick={closeCreateActivityModal}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>Todos convidados podem visualizar as atividades. </p>
                </div>

                <form onSubmit={createActivity} className='space-y-3'>
                    <TextInput type="text" name='activityName' placeholder="Qual a atividade?">
                        <User className='text-zinc-400 size-5' />
                    </TextInput>

                    <TextInput type="datetime-local" name='occurs_at' placeholder="Data e horário da atividade">
                        <Calendar className='text-zinc-400 size-5' />
                    </TextInput>

                    <Button variant="primary" size="full" type="submit">
                        {isLoading ? (
                            <div className="flex justify-center items-center gap-1">
                                <ThreeDots color="#fff" height={34} width={34} />
                            </div>
                        ) : (
                            "Salvar atividade"
                        )}
                    </Button>
                </form>
            </div>
        </div>
    )
}