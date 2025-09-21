<br/>
<div align="center">
<img src="./assets/skenas.svg" alt="Skenas Icons" width="200" />
<br/>
<br/>
<br/>
<h1 align="center">@nikaat-crop/es-icons</h1>

<br/>
<p align="center">
A comprehensive collection of beautiful and modern SVG icons specifically designed for **Skenas (اسکناس)** project, featuring **160+ carefully crafted financial and service icons** with full **TypeScript support**.
<br/>
<br/>
<a href="https://es-icons.vercel.app/" target="_blank" rel="noopener noreferrer">
  <strong>View full documentation on Storybook »</strong>
</a>
<br/>
<br/>
</p>
</div>

## 📸 Preview

<div align="center">
  <img src="./assets/preview.png" alt="ES Icons Preview" width="100%" />
</div>

## ✨ Features

- 🎨 **160+ Beautiful Icons** - Comprehensive collection of modern SVG icons
- 🏦 **Financial & Banking Icons** - Specialized icons for financial applications
- 🛠 **Service Icons** - Complete set of service-related icons
- ⚛️ **React Components** - Ready-to-use React components with TypeScript
- 📱 **Responsive Design** - Icons that look great at any size
- 🎯 **Optimized SVGs** - Lightweight and performance-optimized
- 🔧 **Customizable** - Easy to style and customize with CSS
- 📖 **Well Documented** - Complete documentation with Storybook
- 🚀 **Tree Shakable** - Import only the icons you need
- 💪 **TypeScript Support** - Full type safety and IntelliSense

## 📦 Installation

```bash
npm install @nikaat-crop/es-icons
```

## 🚀 Usage

### Basic Usage

```tsx
import { Home, User, Setting } from '@nikaat-crop/es-icons';

function App() {
  return (
    <div>
      <Home />
      <User />
      <Setting />
    </div>
  );
}
```

### With Custom Styling

```tsx
import { BankCard, Wallet } from '@nikaat-crop/es-icons';

function App() {
  return (
    <div>
      <BankCard 
        style={{ 
          width: '24px', 
          height: '24px', 
          color: '#3B82F6' 
        }} 
      />
      <Wallet className="text-green-500 w-6 h-6" />
    </div>
  );
}
```

### Tree Shaking

Import only the icons you need to keep your bundle size small:

```tsx
// ✅ Good - Only imports the specific icons
import { Home, User } from '@nikaat-crop/es-icons';

// ❌ Avoid - Imports the entire library
import * as Icons from '@nikaat-crop/es-icons';
```

And many more! Check out the [full documentation](https://es-icons.vercel.app/) for a complete list.

## 🎨 Icon Props

All icons accept standard SVG props:

| Prop        | Type                | Default | Description                    |
| ----------- | ------------------- | ------- | ------------------------------ |
| `className` | string              | -       | CSS class for styling          |
| `style`     | CSSProperties       | -       | Inline styles                  |
| `width`     | string \| number    | "1em"   | Icon width                     |
| `height`    | string \| number    | "1em"   | Icon height                    |
| `color`     | string              | "currentColor" | Icon color          |
| `onClick`   | () => void          | -       | Click handler                  |

## 📄 License

MIT © [Skenas Team](https://github.com/sadegh1379/es-icons)

---

<div align="center">
  <p>Made with ❤️ for the Skenas project</p>
  <p>
    <a href="https://es-icons.vercel.app/">Documentation</a> •
    <a href="https://github.com/sadegh1379/es-icons">GitHub</a> •
    <a href="https://www.npmjs.com/package/@nikaat-crop/es-icons">NPM</a>
  </p>
</div>
