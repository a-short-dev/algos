import axios from 'axios';

export async function getCurrentUser(id: number) {
  try {
    const user = await axios.get(`api/user`);
    if (user.status === 200) {
      const { firstName, lastName } = user.data.user;
      return { firstName, lastName };
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
