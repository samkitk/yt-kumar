import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  youtubeVideoId: string;
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  publishedAt: Date;

  @Column()
  thumbnailUrl: string;

  @Column()
  videoUrl: string;
}
