import { pages } from '../controllers/index.js';

const router = async (route) => {
  const content = document.getElementById('root');
  content.innerHTML = '';

  console.log('route', route);

  switch (route) {
    case '#/': {
      return content.appendChild(pages.login());
    }
    case '#/home': {
      return content.appendChild(await pages.home());
    }
    case '#/register': {
      return content.appendChild(pages.register());
    }
    default: {
      return content.appendChild(pages.login());
    }
  }
};

export { router };
