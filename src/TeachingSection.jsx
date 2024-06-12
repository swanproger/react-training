import WayToTaech from "./WayToTeach";
import { ways } from "./data";
export default function TeachingSection() {
    return (
        <section>
            <ul>
                {ways.map((way) => (
                    <WayToTaech key={way.title} {...way} />
                ))}
            </ul>
        </section>
    );
}
