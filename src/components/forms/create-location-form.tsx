"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateLocationFormData } from "@/src/types/CreateLocationFormData";
import { createLocationFormSchema } from "@/src/schema/CreateLocationFormSchema";
import { Heading } from "@chakra-ui/react";
import { Button } from "../actions/button";

interface CreateLocationFormProps {}

export default function CreateLocationForm({}: CreateLocationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateLocationFormData>({
    resolver: zodResolver(createLocationFormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  function addNewImage() {
    append({ alt: "", url: "" });
  }
  function removeImage(index: number) {
    remove(index);
  }

  if (fields.length < 1) {
    addNewImage();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="border rounded p-2"
      >
        <Heading className="mb-4">Criar uma nova localização:</Heading>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Nome da localização</label>
          <input
            className="border"
            type="text"
            id="name"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-400 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="description">Descrição da localização</label>
          <textarea
            className="border"
            id="description"
            {...register("description")}
          ></textarea>
          {errors.description && (
            <span className="text-red-400 text-sm">
              {errors.description.message}
            </span>
          )}
        </div>
        <div className="border rounded p-2">
          {fields.map((field, index) => (
            <div className="border rounded p-2" key={field.id}>
              <div className="flex flex-col gap-4">
                <label htmlFor={"url" + field.id}>Url da imagem</label>
                <input
                  className="border"
                  type="text"
                  id={"url" + field.id}
                  {...register(`images.${index}.url`)}
                />
                {errors.name && (
                  <span className="text-red-400 text-sm">
                    className='border'{errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor={"alt" + field.id}>Texto Alt</label>
                <input
                  className="border"
                  type="text"
                  id={"alt" + field.id}
                  {...register(`images.${index}.alt`)}
                />
                {errors.name && (
                  <span className="text-red-400 text-sm">
                    className='border'{errors.name.message}
                  </span>
                )}
              </div>
              <Button
                type="button"
                className="bg-red-200"
                onClick={() => removeImage(index)}
              >
                Remover
              </Button>
            </div>
          ))}
          <Button type="button" onClick={addNewImage} className="bg-lime-200">
            Adicionar
          </Button>
        </div>
        <button type="submit">Criar Local</button>
      </form>
    </>
  );
}
