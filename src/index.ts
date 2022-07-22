import { parse } from 'plantuml-parser';

const data = `
@startuml

class Auth
class User
class Base

Auth -> Base
User -> Base
Auth -> User

@enduml
`;

// parse PlantUML
parse(data);

// Format and print parse result
