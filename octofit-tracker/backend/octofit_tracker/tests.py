from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelTests(TestCase):
    def setUp(self):
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')
        self.user = User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel)

    def test_user_creation(self):
        self.assertEqual(self.user.name, 'Spider-Man')
        self.assertEqual(self.user.email, 'spiderman@marvel.com')
