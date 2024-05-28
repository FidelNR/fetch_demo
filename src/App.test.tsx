import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';


test('App renders correctly and matches snapshot', () => {
  const { asFragment, getByRole } = render(<App name="John Doe" />);

  // Verificar que el componente se renderiza correctamente
  expect(getByRole('heading', { name: /hello, john doe!/i })).toBeInTheDocument();
  expect(getByRole('button', { name: /click me/i })).toBeInTheDocument();

  // Crear una snapshot inline
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div>
        <h1>
          Hello, John Doe!
        </h1>
        <button>
          Click me
        </button>
      </div>
    </DocumentFragment>
  `);
});













/*describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});

describe("App component", () => {
  it("renders correct heading",()=>{
    render(<App/>);
    expect(screen.getByRole("heading").textContent)
    .toMatch(/our first test/i);
  });
});*/

/*describe("App component", () => {
  it("renders default state", ()=>{
    const {container} = render(<App/>);
    expect(container).toMatchSnapshot();
  });
  it("render New Text", async() => {
    const user = userEvent.setup();
    render(<App/>);
    const button = screen.getByRole("button",{name: "Click me"});
    await user.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/new text/i);
  });
});*/
