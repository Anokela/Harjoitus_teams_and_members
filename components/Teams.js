import { View, Text, Alert } from 'react-native';
import React, {useState} from 'react';
import { db, TEAMS_REF } from '../firebase/Config';

export default function Teams() {
    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    function addTeam() {
        let newNickname = nickname.trim().toLowerCase();
        db.ref()(TEAMS_REF).child(newNickname).once('value', querySnapShot => {
            if (querySnapShot.val() === null) {
                db.ref(TEAMS_REF).child(newNickname).set({
                    name: name.trim(),
                    nickanme: newNickname,
                    description: description.trim()
                });
                clearState();
            }
            else {
                Alert.alert('Nickname ' + nickname + ' is not free. ' + ' Pick another nickname.')
            }
        });
    }

  return (
    <View>
      <Text>Teams</Text>
    </View>
  )
}