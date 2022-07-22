import { parse, formatters } from 'plantuml-parser';

const data = `
@startuml

class Base
class Refund
class Repair

Refund -> Base
Repair -> Base

@enduml
`;

// parse PlantUML
const result = parse(data);

// Format and print parse result
console.log(
  formatters.default(result),
);
