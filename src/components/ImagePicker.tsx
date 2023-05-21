'use client'

// o "use client" serve para dizer para o navegador usar o JS necessario para rodar a função

export function ImagePicker() {
  return (
    <input
      onChange={(value) => console.log(value)}
      type="file"
      id="midia"
      className="invisible h-0 w-0"
    />
  )
}
