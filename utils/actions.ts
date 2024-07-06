'use server';

import db from '@/utils/db';

export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  });
};
