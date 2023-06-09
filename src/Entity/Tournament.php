<?php

namespace App\Entity;

use App\Repository\TournamentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: TournamentRepository::class)]
class Tournament
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'Le nom du tournoi est requis')]
    #[Assert\Length(
        min: 3,
        max: 15,
        minMessage: 'Le nom du tournoi doit comporter {{ limit }} caractères minimum.',
        maxMessage: 'Le nom du tournoi doit comporter {{ limit }} caractères maximum.',
    )]
    private ?string $name = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Assert\NotBlank(message: 'Date de fin requise.')]
    #[Assert\GreaterThan('today', message: 'La date de fin doit être supérieur à la date actuelle.')]
    private ?\DateTimeInterface $endAt = null;

    #[ORM\Column(length: 255)]
    private ?string $speed = null;

    #[ORM\Column]
    private ?bool $privacy = null;

    #[ORM\ManyToOne(inversedBy: 'tournaments')]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotBlank(message: 'Choix de course requis.')]
    private ?Race $race = null;

    #[ORM\ManyToOne(inversedBy: 'tournaments')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\OneToMany(mappedBy: 'tournament', targetEntity: Entry::class)]
    private Collection $entries;

    #[ORM\Column(nullable: true)]
    #[Assert\Positive]
    #[Assert\GreaterThanOrEqual(value: 3, message: 'La capacité doit être supérieure ou égale à 3. Consultez la rubrique "En Savoir Plus"')]
    private ?int $capacity = null;

    #[ORM\ManyToMany(targetEntity: User::class)]
    private Collection $registered;

    public function __construct()
    {
        $this->entries = new ArrayCollection();
        $this->registered = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getEndAt(): ?\DateTimeInterface
    {
        return $this->endAt;
    }

    public function setEndAt(\DateTimeInterface $endAt): self
    {
        $this->endAt = $endAt;

        return $this;
    }

    public function getSpeed(): ?string
    {
        return $this->speed;
    }

    public function setSpeed(string $speed): self
    {
        $this->speed = $speed;

        return $this;
    }

    public function isPrivacy(): ?bool
    {
        return $this->privacy;
    }

    public function setPrivacy(bool $privacy): self
    {
        $this->privacy = $privacy;

        return $this;
    }

    public function getRace(): ?Race
    {
        return $this->race;
    }

    public function setRace(?Race $race): self
    {
        $this->race = $race;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, Entry>
     */
    public function getEntries(): Collection
    {
        return $this->entries;
    }

    public function addEntry(Entry $entry): self
    {
        if (!$this->entries->contains($entry)) {
            $this->entries->add($entry);
            $entry->setTournament($this);
        }

        return $this;
    }

    public function removeEntry(Entry $entry): self
    {
        if ($this->entries->removeElement($entry)) {
            // set the owning side to null (unless already changed)
            if ($entry->getTournament() === $this) {
                $entry->setTournament(null);
            }
        }

        return $this;
    }

    public function getCapacity(): ?int
    {
        return $this->capacity;
    }

    public function setCapacity(?int $capacity): self
    {
        $this->capacity = $capacity;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getRegistered(): Collection
    {
        return $this->registered;
    }

    public function addRegistered(User $registered): self
    {
        if (!$this->registered->contains($registered)) {
            $this->registered->add($registered);
        }

        return $this;
    }

    public function removeRegistered(User $registered): self
    {
        $this->registered->removeElement($registered);

        return $this;
    }
}
