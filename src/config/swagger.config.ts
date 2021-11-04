import { DocumentBuilder } from "@nestjs/swagger";

const config = new DocumentBuilder()
.setTitle('Sign language api')
.setDescription('This api will show and explain most of the endpoints within the api that are usable depending on the user')
.setVersion('1.0')
.build();

export default config;