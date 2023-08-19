import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Video } from 'src/videos/entities/video.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string; // Be sure to hash the password before saving it

  // Define relationships
  watchLaterVideos: Video[];
}
