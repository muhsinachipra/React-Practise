import ComponentC from "./ComponentC"

export default function ComponentB() {
    return (
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC/>
        </div>
    )
}