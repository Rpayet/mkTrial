<?php

namespace App\Form;

use App\Entity\Tournament;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EventType extends AbstractType
{


    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', null, [
                'invalid_message' => 'Le nom de l\'événement doit être compris entre 3 et 15 caractères.',
            ])
            ->add('endAt', DateType::class, [
                'widget' => 'single_text',
                'format' => 'yyyy-MM-dd',
                'invalid_message' => 'La date de l\'évènement doit être supérieur à la date en cours.',
            ])
            ->add('race', null, [
                'choice_label' => 'name',
                'invalid_message' => 'Erreur de la sélection de course.',
            ])
            ->add('speed', null, [
                'invalid_message' => 'Erreur dans la sélection de la vitesse.',

            ])
            ->add('privacy', null, [
                'invalid_message' => 'Erreur dans la sélection de la confidentialités.',
            ])
            ->add('capacity', null, [
                'invalid_message' => 'La sélection doit être supérieur ou égale à 3.',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Tournament::class,
        ]);
    }
}
