'use server';

import db from '@/utils/db';
import { revalidatePath } from 'next/cache';

export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  });

  revalidatePath('/todo');
};

export const completeTodo = async (id) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  });

  revalidatePath('/todo');
};
